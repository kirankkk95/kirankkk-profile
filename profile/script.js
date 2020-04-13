const spans = document.querySelectorALL('h1 sapan')
spans.forEach(span=> span.addEventListener('mouseover',function(e) {
	span.classlist.add('animated','rubberBand')
}))
spans.forEach(span=> span.addEventListener('mouseout',function(e) {
	span.classlist.remove('animated','rubberBand')
}))

const htmlbar=document.querySelector('.bar-html')
const cssbar=document.querySelector('.bar-css')
const jsbar=document.querySelector('.bar-javascript')
const reactbar=document.querySelector('.bar-react')

var t1=new TimelineLite()
t1.fromTo(htmlbar,.75,{width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px)',ease:power4.easeout})
  .fromTo(cssbar,.75,{width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px)',ease:power4.easeout})
  .fromTo(jsbar,.75,{width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px)',ease:power4.easeout})
  .fromTo(reactbar,.75,{width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px)',ease:power4.easeout})

const controller = new scrollMagic.controller()
const scene = new scrollMagic.scene({
	triggerElement: '.skills',
	triggerHook:0;
})  

.setTween(t1) 
.addTo(controller)














