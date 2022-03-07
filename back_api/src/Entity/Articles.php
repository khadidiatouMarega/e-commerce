<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticlesRepository::class)
 */
class Articles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $continent;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $countrie;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $categorie;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stock_M;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stock_S;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stock_XS;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stock_XL;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stock_L;

    /**
     * @ORM\OneToMany(targetEntity=Commentaires::class, mappedBy="name")
     */
    private $commentaires;

    public function __construct()
    {
        // $this->commentaires = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getContinent(): ?string
    {
        return $this->continent;
    }

    public function setContinent(string $continent): self
    {
        $this->continent = $continent;

        return $this;
    }

    public function getCountrie(): ?string
    {
        return $this->countrie;
    }

    public function setCountrie(string $countrie): self
    {
        $this->countrie = $countrie;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getStockM(): ?string
    {
        return $this->stock_M;
    }

    public function setStockM(string $stock_M): self
    {
        $this->stock_M = $stock_M;

        return $this;
    }

    public function getStockS(): ?string
    {
        return $this->stock_S;
    }

    public function setStockS(string $stock_S): self
    {
        $this->stock_S = $stock_S;

        return $this;
    }

    public function getStockXS(): ?string
    {
        return $this->stock_XS;
    }

    public function setStockXS(string $stock_XS): self
    {
        $this->stock_XS = $stock_XS;

        return $this;
    }

    public function getStockXL(): ?string
    {
        return $this->stock_XL;
    }

    public function setStockXL(string $stock_XL): self
    {
        $this->stock_XL = $stock_XL;

        return $this;
    }

    public function getStockL(): ?string
    {
        return $this->stock_L;
    }

    public function setStockL(string $stock_L): self
    {
        $this->stock_L = $stock_L;

        return $this;
    }

    /**
     * @return Collection|Commentaires[]
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaires $commentaire): self
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires[] = $commentaire;
            $commentaire->setName($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaires $commentaire): self
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getName() === $this) {
                $commentaire->setName(null);
            }
        }

        return $this;
    }
}
