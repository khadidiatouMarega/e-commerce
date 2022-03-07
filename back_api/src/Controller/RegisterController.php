<?php

namespace App\Controller;

use App\Entity\Users;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\RegisterRepository;

class RegisterController extends AbstractController
{
    /**
     * @Route("/api/register", name="app_register", methods={"POST"})
     */
    public function register(Request $request)
    {
        $user = new Users();
        $content = $request->getContent();
        $json = json_decode($content, true);
        $email = $json['email'];
        $password  = $json['password'];

        $errors = [];
        if(!$errors)
        {
            $user->setEmail($email);
            $user->setPassword($password);

            try
            {
                $EntityM = $this->getDoctrine()->getManager();
                $EntityM->persist($user);
                $EntityM->flush();

                return $this->json([
                    'user' => $user
                ]);
            }
            catch(UniqueConstraintViolationException $e)
            {
                $errors[] = "Cet e-mail existe déjà!";
            }

        }
        return $this->json([
            'errors' => $errors
        ], 400);
        
    }
     /**
     * @Route("/api/admin", name="user_admin", methods={"PATCH"})
     */
    public function adminRegister($id, RegisterRepository $userRepository)
    {
        $existingUser = $userRepository->find($id);
        $role = array('ROLE_ADMIN');
        $existingUser->setRoles($role);
        $entityM = $this->getDoctrine()->getManager();
        $entityM->merge($existingUser);
        $entityM->flush();

        return $this->json([
            'user' => $existingUser
        ]); 
    }
    
}