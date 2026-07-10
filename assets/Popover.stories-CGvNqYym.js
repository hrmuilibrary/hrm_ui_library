import{j as e}from"./jsx-runtime-BarBKLmL.js";import{r as n}from"./iframe-BwLkT-HM.js";import{P as p}from"./Popover-CaVe17ta.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BWpdNhGt.js";import"./types-Dfy1ZLP3.js";import"./helpers-BVTy3eVf.js";import"./IconDismiss-BqNIMBoF.js";import"./Tooltip-CIqc5Yzv.js";import"./Text-y-nRn9Q2.js";import"./index-CDBNu5nr.js";import"./Button-B1KYsLoT.js";import"./Link-BRUCOZ7Z.js";const E={title:"Popover",component:p,argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","middle-left","middle-right"],control:{type:"radio"}}}},m=d=>{const o=n.useRef(null);return e.jsxs("div",{ref:o,children:[e.jsx(p,{...d,id:"popover_test",elemRef:o.current??void 0}),e.jsx("div",{style:{position:"absolute",left:500,top:200,width:100,height:100,background:"red"},children:e.jsx("div",{id:"popover_test",children:"Click on me"})})]})},t=m.bind({});t.args={linkAddons:{url:"dasdsa",beforeLink:e.jsx("div",{children:"Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'"})},text:e.jsx("div",{children:"Test"}),position:"top-right",clicked:!0};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Popover"];export{t as Popover,P as __namedExportsOrder,E as default};
