import{j as e}from"./jsx-runtime-hRHawQBZ.js";import{r as n}from"./iframe-CUT2okj2.js";import{P as p}from"./Popover-BatYE50F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BEY2fyvh.js";import"./types-CE36gYxb.js";import"./helpers-BLQyT1U3.js";import"./IconDismiss-CTOZt6dq.js";import"./Tooltip-C357lVtq.js";import"./Text-BP7KAqxP.js";import"./index-BhZI_l9L.js";import"./Button-Be5IWYBq.js";import"./Link-B5cQBUgV.js";const E={title:"Popover",component:p,argTypes:{position:{options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","middle-left","middle-right"],control:{type:"radio"}}}},m=d=>{const o=n.useRef(null);return e.jsxs("div",{ref:o,children:[e.jsx(p,{...d,id:"popover_test",elemRef:o.current??void 0}),e.jsx("div",{style:{position:"absolute",left:500,top:200,width:100,height:100,background:"red"},children:e.jsx("div",{id:"popover_test",children:"Click on me"})})]})},t=m.bind({});t.args={linkAddons:{url:"dasdsa",beforeLink:e.jsx("div",{children:"Lorem ipsum dolor sit amet.A sunt assumenda id quos sequi qui eius nulla. Est saepe dolorem qui nemo enim id velit voluptas.EstLorem ipsum dolor sit amet'"})},text:e.jsx("div",{children:"Test"}),position:"top-right",clicked:!0};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
