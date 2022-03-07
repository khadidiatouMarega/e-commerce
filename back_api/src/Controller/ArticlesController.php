<?php

namespace App\Controller;
use App\Entity\Articles;
use App\Entity\Orders;
use App\Entity\Commentaires;

use App\Repository\ArticlesRepository;
use App\Repository\CommentairesRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;

use Symfony\Component\HttpFoundation\Response;

class ArticlesController extends AbstractController
{ /**
    * @Route("/api/articles", name="fetch_articles", methods={"GET"})
    */
   public function fetch_articles(ArticlesRepository $articlesRepository)
   {
       $articles = $articlesRepository->findAll();
       $articles_data = [];
       foreach($articles as $value){
        array_push($articles_data, [
            "id"=>$value->getId(),
            "name"=>$value->getName(),
            "price"=>$value->getPrice(),
            "description"=>$value->getDescription(),
            "photo"=>$value->getPhoto(),
        ]);
       }
       return $this->json([
           'articles' => $articles_data
       ]);
   }

   /**
    * @Route("/api/article_categorie/{categorie}", name="fetch_articleCate", methods={"GET"})
    */
   public function article_categorie(ArticlesRepository $articlesRepository, $categorie)
   {
       $articles = $articlesRepository->findBy(['categorie'=>$categorie]);
           return $this->json([
               'article' => $articles
           ]);
   }
   /**
    * @Route("/api/article/{id}", name="fetch_article", methods={"GET"})
    */
   public function fetch_article(ArticlesRepository $articlesRepository, $id)
   {
       $article = $articlesRepository->find($id);
       return $this->json([
           'article' => $article
       ]);
   }

   
    /**
    * @Route("/api/articles/last", name="last_article", methods={"GET"})
    */
   public function last_articles(ArticlesRepository $articlesRepository)
   {
      
       $article = $articlesRepository->findBy(
           array(),
           array('id' => 'DESC'), 
           3);
       return $this->json([
           'last_articles' => $article
       ]);
   }

   /**
    * @Route("/api/article/create", name="article_create", methods={"POST"})
    */
   public function create(Request $request)
   {;
       $article = new Articles();
       
       $content = $request->getContent();
       $json = json_decode($content, true);
       $name = $json['name'];
       $description = $json['description'];
       $price  = $json['price'];
       $photo  = 'Assets/articles/manteau2.png';
    //    $size = [

    //    ]

       // condition if accessoire ou vêtement
       // vêtement -> xs=10, s=10, m=10, l=10, xl=10
       // accesoire -> xs=10, s=null, m=null, l=null, xl=null
       
       // t-shirt          sweatshirt      robe     
    //    if($categorie==1 || $categorie==2 || $categorie==3 ){

    //        $m = 10;
    //        $s = 10;
    //        $xs = 10;
    //        $xl = 10;
    //        $l = 10;
    //    }
    //    else{
    //        $xs = 10;
    //        $m = null;
    //        $s = null;
    //        $xl = null;
    //        $l = null;
    //    }

       $errors = [];
       
       if(!$errors)
       {
           $article->setName($name);
           $article->setPhoto($photo);
           $article->setPrice($price);
           $article->setDescription($description);
        //    $article->setContinent($continent);
           // $article->setCountrie($countrie);
        //    $article->setCategorie($categorie);
        //    $article->setStockXS($xs);
        //    $article->setStockS($s);
        //    $article->setStockM($m);
        //    $article->setStockL($l);
        //    $article->setStockXL($xl);
        //    $article->setColor($color);

           try
           {
               $om = $this->getDoctrine()->getManager();
               $om->persist($article);
               $om->flush();

               return $this->json([
                   'name' => $article->getName(),
                   'price' => $article->getPrice(),
                   'description' => $article->getDescription(),
                   'photo' => $article->getPhoto()
               ]);
           }
           catch(UniqueConstraintViolationException $e) 
           {
               $errors[] = "Echec de l'insertion";
           }

       }
       return $this->json([
           'errors' => $errors
       ], 400);
   }

  

   /**
    * @Route("/api/article/update/{id}", name="article_update", methods={"PATCH"})
    */
   //No route found for
   public function update(Request $request, $id, ArticlesRepository $articlesRepository)
   {
       $input = file_get_contents("php://input");
       $input = html_entity_decode($input);
       $json = json_decode($input,true);
       $existingArticle = $articlesRepository->find($id);
       foreach($json as $key=>$value)
       {
           $setter = "set".ucfirst($key);
           $existingArticle->$setter($value);
       }
       $om = $this->getDoctrine()->getManager();
       $om->merge($existingArticle);
       $om->flush();

       return $this->json([
           'article' => $existingArticle
       ]); 
   }

   /**
    * @Route("/api/article/delete/{id}", name="article_delete", methods={"DELETE"})
    */
   //No route found for
   public function delete(Request $request, ArticlesRepository $articlesRepository, $id)
   {
       $existingArticle = $articlesRepository->find($id);
       $om = $this->getDoctrine()->getManager();
       $om->remove($existingArticle);
       $om->flush();
       return $this->json([
           'delete' => true
       ]);

   }

   /**
    * @Route("/api/payment", name="api_payment", methods={"POST"})
    */
   //No route found for
   public function payment(Request $request)
   {
       $order = new Orders();
       $content = $request->getContent();
       $json = json_decode($content, true);
       $id_user = $json['id_user'];
       $status = 0;
       $articles = $json['articles'];
       $order->setStatus($status);
       $order->setIdUser($id_user);
       $order->setDateOrder(new \DateTime('now'));
       $order->setArticles($articles);
       $om = $this->getDoctrine()->getManager();
       $om->persist($order);
       $om->flush();

       return $this->json([
           'order' => $order
       ]);
       
   }

   /**
    * @Route("/api/article/comment", name="article_comment", methods={"POST"})
    */
   public function commentaires(Request $request)
   {
       $comment = new Commentaires();
       
       $content = $request->getContent();
       $json = json_decode($content, true);
       $article = $json['article'];
       $commentaire = $json['commentaire'];
       $id_user = $json['id_user'];
       // $name = $json['name'];
      

       $errors = [];
       
       if(!$errors)
       {
           $comment->setArticle($article);
           $comment->setIdUser($id_user);
           $comment->setCommentaire($commentaire);
           // $comment->setName($name);           
           try
           {
               $om = $this->getDoctrine()->getManager();
               $om->persist($comment);
               $om->flush();

               return $this->json([
                   'comment' => $comment
               ]);
           }
           catch(UniqueConstraintViolationException $e) 
           {
               $errors[] = "Echec de l'insertion";
           }

       }
       return $this->json([
           'errors' => $errors
       ], 400);
   }

   /**
    * @Route("/api/comments/{id}", name="fetch_comments", methods={"GET"})
    */
   public function fetch_comments(CommentairesRepository $repository, $id)
   {
       $comments = $repository->findBy(['article'=>$id]);
       return $this->json([
           'comments' => $comments
       ]);
   }


}
