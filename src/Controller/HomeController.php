<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ArticleRepository;



class HomeController extends AbstractController
{
    private ArticleRepository $articleRepository;

    public function __construct(ArticleRepository $articleRepository) {
        $this->articleRepository = $articleRepository;
    }
    
    #[Route('/')]
public function home(Request $request): \Symfony\Component\HttpFoundation\Response
    {
        $articles = $this->articleRepository->findAll();

        return $this->render('home/home.html.twig', [
            'articles' => $articles
        ]);    }
    }
