import{j as e}from"./jsx-runtime-BwwPEZn0.js";import{r as n}from"./iframe-BIzGzJ_b.js";import{P as p}from"./Popover-C4DFxLRs.js";import"./preload-helper-Dp1pzeXC.js";import"./ModalConfirmation-BCoRbo2R.js";import"./index-B8yEByCr.js";import"./AnimatePresenceWrapper-C1cuY54J.js";import"./types-BttHpRV4.js";import"./helpers-DUxwTJ7n.js";import"./IconDismiss-KT0CHKHG.js";import"./Tooltip-DkluFP_a.js";import"./Text-Crx1xgcX.js";import"./index-DYDl_GcV.js";import"./Button-DpqSA8FN.js";import"./Link-D_tVsXHm.js";const P={title:"Popover",component:p,argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","middle-left","middle-right"],control:{type:"radio"}}}},m=d=>{const o=n.useRef(null);return e.jsxs("div",{ref:o,children:[e.jsx(p,{...d,id:"popover_test",elemRef:o.current??void 0}),e.jsx("div",{style:{position:"absolute",left:500,top:200,width:100,height:100,background:"red"},children:e.jsx("div",{id:"popover_test",children:"Click on me"})})]})},t=m.bind({});t.args={linkAddons:{url:"dasdsa",beforeLink:e.jsx("div",{children:"Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'"})},text:e.jsx("div",{children:"Test"}),position:"top-right",clicked:!0};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  return <div ref={parentRef}>
      <_Popover {...args} id="popover_test" elemRef={parentRef.current as HTMLElement ?? undefined} />
      <div style={{
      position: 'absolute',
      left: 500,
      top: 200,
      width: 100,
      height: 100,
      background: 'red'
    }}>
        <div id="popover_test">Click on me</div>
      </div>
    </div>;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const L=["Popover"];export{t as Popover,L as __namedExportsOrder,P as default};
