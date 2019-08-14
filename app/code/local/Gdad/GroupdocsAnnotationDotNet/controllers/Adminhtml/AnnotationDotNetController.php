<?php

class Gdad_GroupdocsAnnotationDotNet_Adminhtml_AnnotationDotNetController extends Mage_Adminhtml_Controller_Action
{
    public $jj;
    
    public function indexAction()
    {
    $this->loadLayout();
    
    // gether data
    $block = $this->getLayout()->getBlock('annotationdotnet'); 
    $this->renderLayout();
    }
    
    public function postAction()
    {
        $post = $this->getRequest()->getPost();
        try {
            if (empty($post)) {
                Mage::throwException($this->__('Invalid form data.'));
            }
            
            /* here's your form processing */
            
            $message = $this->__('Your form has been submitted successfully.');
            Mage::getSingleton('adminhtml/session')->addSuccess($message);
        } catch (Exception $e) {
            Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
        }
        $this->_redirect('*/*');
    }
}