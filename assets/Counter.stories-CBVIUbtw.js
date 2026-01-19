import{j as p}from"./Text-D__sJRfZ.js";import{r as i}from"./iframe-C4aqWbSv.js";import"./DropzoneFileUpload-zeHFHiAK.js";import{l as e}from"./UnderConstruction-Dy_905gT.js";import"./types-DgKGVZOG.js";import"./ButtonGroup-DPNhRfYi.js";import"./Chips-ClRZkzpD.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-Dg27E1n7.js";import"./IconChevronDoubleRight-BZ4yhFAI.js";import"./IconDismissCircleFilled-Cj6hEDzZ.js";import"./index-BWyb6v_r.js";const O={title:"Counter",component:e},d=s=>{const[a,u]=i.useState(6),m=c=>{u(c)};return p.jsx(e,{...s,handleChange:m,counter:a,dataId:"counter"})},t=d.bind({});t.args={max:999,min:5,label:"Counter label",customError:""};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [count, setCount] = useState(6);
  const onChange = (count: string | number | undefined) => {
    setCount(count as number);
  };
  return <_Counter {...args} handleChange={onChange} counter={count} dataId={'counter'} />;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const R=["Counter"];export{t as Counter,R as __namedExportsOrder,O as default};
