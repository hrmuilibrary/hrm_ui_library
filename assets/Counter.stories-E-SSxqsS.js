import{j as p}from"./Text-BCy2auDT.js";import{r as i}from"./iframe-DbuX508q.js";import"./DropzoneFileUpload-CwB8h4Ko.js";import{l as e}from"./UnderConstruction-yQIFCI6E.js";import"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import"./Chips-bt-0p-g_.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-D2MfdYuB.js";import"./IconChevronDoubleRight-BJ7fJSHq.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const O={title:"Counter",component:e},d=s=>{const[a,u]=i.useState(6),m=c=>{u(c)};return p.jsx(e,{...s,handleChange:m,counter:a,dataId:"counter"})},t=d.bind({});t.args={max:999,min:5,label:"Counter label",customError:""};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [count, setCount] = useState(6);
  const onChange = (count: string | number | undefined) => {
    setCount(count as number);
  };
  return <_Counter {...args} handleChange={onChange} counter={count} dataId={'counter'} />;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const R=["Counter"];export{t as Counter,R as __namedExportsOrder,O as default};
