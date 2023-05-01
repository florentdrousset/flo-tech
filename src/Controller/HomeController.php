<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/')]
public function home(Request $request): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('home/home.html.twig', [
        ]);    }
    }
