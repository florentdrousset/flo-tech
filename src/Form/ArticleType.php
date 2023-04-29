<?php

namespace App\Form;

use App\Entity\Article;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('content', CKEditorType::class, [
                'config' => [
                    'toolbar' => 'full',
                    'required' => true,
                    'extraPlugins' => 'codesnippet',
                    'codeSnippet_theme' => 'default', // Or any other theme you prefer
                ]
            ])
            ->add('date')
            ->add('author')

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
