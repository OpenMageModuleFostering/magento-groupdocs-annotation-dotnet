function insertAnnotationDotNet()
{
   
    var form = document.forms.formAnnotation;
    var url = form.url.value;
    var docName = form.path.value;
    var handler = form.handler;
    var width = form.width.value;
    var height = form.height.value;
    var content = '';
    var use = '';
    if (url != "") {
        if (width == "") {
            width = "650";
        }
        if (height == "") {
            height = "750";
        }
        if (handler.checked) {
                handler = "Handler";
                use = true;
                content = 'with handler';
        } else {
            use = false;
            handler = "";
            content = 'with out handler'
        }
        if (url.slice(-1) != '/') {
            url = url + '/';
        }
        var libs =  "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/jquery-1.9.1.min.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/jquery-ui-1.10.3.min.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/knockout-3.0.0.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/turn.min.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=libs/modernizr.2.6.2.Transform2d.min.js'></script>" +
        "<script type='text/javascript'>if (!window.Modernizr.csstransforms)   $.ajax({url: '" + url + "document-viewer/GetScript" + handler + "?name=libs/turn.html4.min.js', dataType: 'script', type: 'GET', async: false});</script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=installableViewer.min.js'></script>" +
        "<script type='text/javascript'>$.ui.groupdocsViewer.prototype.applicationPath = '" + url + "';</script>" +
        "<script type='text/javascript'>$.ui.groupdocsViewer.prototype.useHttpHandlers = " + use + ";</script>" +
        "<script type='text/javascript' src='" + url + "document-viewer/GetScript" + handler + "?name=GroupdocsViewer.all.min.js'></script>" +
        "<script type='text/javascript' language='JavaScript'>" +
                "$(function() {" +
                "var styleBootstrap = document.createElement('link');" +
                "styleBootstrap.setAttribute('rel', 'stylesheet');" +
                "styleBootstrap.setAttribute('type', 'text/css');" +
                "styleBootstrap.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=bootstrap.css');" +
                "var gdCss = document.createElement('link');" +
                "gdCss.setAttribute('rel', 'stylesheet');" +
                "gdCss.setAttribute('type', 'text/css');" +
                "gdCss.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=GroupdocsViewer.all.min.css');" +
                "var uiCss = document.createElement('link');" +
                "uiCss.setAttribute('rel', 'stylesheet');" +
                "uiCss.setAttribute('type', 'text/css');" +
                "uiCss.setAttribute('href', '" + url + "document-viewer/CSS/GetCss" + handler + "?name=jquery-ui-1.10.3.dialog.min.css');" +
                "document.getElementsByTagName('head')[0].appendChild(styleBootstrap);" +
                "document.getElementsByTagName('head')[0].appendChild(gdCss);" +
                "document.getElementsByTagName('head')[0].appendChild(uiCss);" +
                "});" +
        "</script>" +
        "<script type='text/javascript' src='" + url + "document-annotation/GetScript" + handler + "?name=libs/jquery.signalR-1.1.2.min.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-annotation/GetScript" + handler + "?name=libs/jquery.tinyscrollbar.min.js'></script>" +
        "<script type='text/javascript' src='" + url + "document-annotation/GetScript" + handler + "?name=GroupdocsAnnotation.all.min.js'></script>" +
       "<script type='text/javascript' language='JavaScript'>" +
            "var styleAnnotation = document.createElement('link');" +
            "styleAnnotation.setAttribute('rel', 'stylesheet');" +
            "styleAnnotation.setAttribute('type', 'text/css');" +
            "styleAnnotation.setAttribute('href', '" + url + "document-annotation/CSS/GetCss" + handler + "?name=Annotation.css');" +
            "var styleToolbox = document.createElement('link');" +
            "styleToolbox.setAttribute('rel', 'stylesheet');" +
            "styleToolbox.setAttribute('type', 'text/css');" +
            "styleToolbox.setAttribute('href', '" + url + "document-annotation/CSS/GetCss" + handler + "?name=Toolbox.css');" +
            "document.getElementsByTagName('head')[0].appendChild(styleAnnotation);" +
            "document.getElementsByTagName('head')[0].appendChild(styleToolbox);" +
        "</script>" +
        "<script type='text/javascript' src='" + url + "signalr1_1_2/hubs'></script>"+
        "<script type='text/javascript' language='JavaScript'>" +
            "$(function () {var annotationWidget=$('#annotation-widget').groupdocsAnnotation({width:"+ width +",height:" + height + ",fileId:'" + docName + "',docViewerId:'annotation-widget-doc-viewer',quality:90,enableRightClickMenu:!1,showHeader:!0,showZoom:!0,showPaging:!0,showPrint:!1,showFileExplorer:!0,showThumbnails:!0,openThumbnails:!1,zoomToFitWidth:!1,zoomToFitHeight:!1,initialZoom:100,preloadPagesCount:0,sideboarContainerSelector:'div.comments_sidebar_wrapper',usePageNumberInUrlHash:!1,textSelectionSynchronousCalculation:!0,variableHeightPageSupport:!0," +
            "useJavaScriptDocumentDescription:!0,isRightPanelEnabled:!0,createMarkup:!0,use_pdf:'true',_mode:'annotatedDocument',selectionContainerSelector:'[name=\"selection-content\"]',graphicsContainerSelector:'.annotationsContainer',userName:'Anonymous',userId:'91bc6680a1a6a0f6',enabledTools:-1,enableSidePanel:!0}),annotationsViewer=$(annotationWidget).groupdocsAnnotation('getViewer'),annotationsViewerVM=$(annotationsViewer).groupdocsAnnotationViewer('getViewModel'),commentModePanel=$(annotationWidget).find('div.embed_annotation_tools');" +
            "commentModePanel.css('margin-right',0);commentModePanel.draggable({scroll:!1,handle:'.tools_dots',containment:'body',appendTo:'body'});$(annotationWidget).find('.tool_field').click(function(){var a=$(annotationWidget).find('.tool_field');a.hasClass('active')&&$(a.removeClass('active'));$(this).addClass('active')});$(annotationWidget).find('.header_tools_icon').hover(function(){$(this).find('.tooltip_on_hover').css('display','block')},function(){$(this).find('.tooltip_on_hover').css('display','none')});" +
            "$('#annotation-widget .comments_togle_btn').click(function(){flipPanels(!0)});$(annotationWidget).find('.comments_scroll').tinyscrollbar({sizethumb:50});$(annotationWidget).find('.comments_scroll_2').tinyscrollbar({sizethumb:50});var annotationIconsWrapper=$(annotationWidget).find('.annotation_icons_wrapper'),annotationIconsWrapperParent=annotationIconsWrapper.parent()[0],annotationIconsWrapperParentScrollTop;" +
            "annotationsViewer.bind('onDocumentLoadComplete',function(a,b){annotationsViewerVM.listAnnotations();annotationsViewerVM.setHandToolMode();annotationIconsWrapper.height($(annotationsViewer).find('.pages_container').height());annotationIconsWrapperParent.scrollTop=annotationIconsWrapperParentScrollTop});annotationsViewer.bind('onDocViewScrollPositionSet',function(a,b){annotationIconsWrapper.parent()[0].scrollTop=b.position}.bind(this));" +
            "annotationsViewer.bind('onBeforeScrollDocView onDocViewScrollPositionSet',function(a,b){annotationIconsWrapperParent.scrollTop!=b.position&&(annotationIconsWrapperParentScrollTop=annotationIconsWrapperParent.scrollTop=b.position)}.bind(this));" +
            "function flipPanels(a){function b(){d||(annotationIconsWrapperParent.scrollTop=e.scrollTop)}function c(){b();if(a)annotationsViewerVM.redrawConnectingLines(!d);else{annotationsViewerVM.resizePagesToWindowSize();var c=annotationsViewerVM.getSelectable();null!=c&&(c.data('ui-dvselectable')||c.data('dvselectable')).initStorage();annotationsViewerVM.redrawWorkingArea()}}var e=$(annotationsViewer)[0],d=$(annotationWidget).find('.comments_sidebar_collapsed').is(':visible');if(a){d||c();var f=window.setInterval(function(){b()}," +
            "50);$(annotationWidget).find('.comments_sidebar_collapsed').toggle('slide',{direction:'right'},400,function(){clearInterval(f);b()});$(annotationWidget).find('.comments_sidebar_expanded').toggle('slide',{direction:'right'},400,function(){d?c():b()})}else c(),$(annotationWidget).find('.comments_scroll').tinyscrollbar_update('relative'),$(annotationWidget).find('.comments_scroll_2').tinyscrollbar_update('relative')}$(window).resize(function(){flipPanels(!1);resizeSidebar()});resizeSidebar();" +
            "function resizeSidebar(){var a=$('#annotation-widget .doc_viewer').height();$(annotationWidget).find('.comments_content').css({height:a-152+'px'});$(annotationWidget).find('.comments_scroll').css({height:a-152+'px'});$(annotationWidget).find('.comments_scroll .viewport').css({height:a-172+'px'});$(annotationWidget).find('.comments_sidebar_collapsed').css({height:a-50+'px'});$(annotationWidget).find('.comments_scroll').tinyscrollbar_update('relative');$(annotationWidget).find('.comments_scroll_2').css({height:a-" +
            "152+'px'});$(annotationWidget).find('.comments_scroll_2 .viewport').css({height:a-152+'px'});$(annotationWidget).find('.comments_scroll_2').tinyscrollbar_update('relative')}$('html').click(function(){$(annotationWidget).find('.dropdown_menu_button').hasClass('active')&&($(annotationWidget).find('.dropdown_menu_button.active').next('.dropdown_menu').hide('blind','fast'),$(annotationWidget).find('.dropdown_menu_button.active').removeClass('active'))});});" + 
        "</script>";
        var div = '<div id="annotation-widget" class="groupdocs_viewer_wrapper grpdx" style="width:' + width + 'px; height:' + height + 'px;"><span style="visibility:hidden;">' + content + '</span></div>';
        
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content
        tinyMCE.activeEditor.setContent(tinyMceContent + libs);
        //httpGet();
        tinyMCE.activeEditor.setContent(tinyMCE.activeEditor.getContent() + div);
    } else {
        var tinyMceContent = tinyMCE.activeEditor.getContent();
        // set content

        tinyMCE.activeEditor.setContent(tinyMceContent + "Please fill \"URL of installed GroupDocs Annotation .NET\" field in form");
    }

}

function delAnnotationFormDotNet() {
    var del = document.getElementById('page_tabs_content_section_content');
    var divToDel = document.getElementById("groupdocsannotationdotnet");
    del.removeChild(divToDel);
}

function httpGet()
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
             tinyMCE.activeEditor.setContent(tinyMCE.activeEditor.getContent() + '<script>' + xmlhttp.responseText + '</script>');
        }
    }
    xmlhttp.open("GET", "/app/code/local/Gdad/GroupdocsAnnotationDotNet/js/annotationFunction.js", false );
    xmlhttp.send();    
}