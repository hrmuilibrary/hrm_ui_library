import{j as p}from"./Text-CKGaIGJ0.js";import{r as i}from"./iframe-DpMxAmj9.js";import"./DropzoneFileUpload-C2ZWgrjN.js";import{l as e}from"./UnderConstruction-DPyuyZui.js";import"./types-BrDM8sXB.js";import"./ButtonGroup-BgsQd8GB.js";import"./Chips-BmNorCMb.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-BD2IbNse.js";import"./IconChevronDoubleRight-Ij4DwE2P.js";import"./IconDismissCircleFilled-lD4REoq8.js";import"./index-BuZNQKp7.js";const O={title:"Counter",component:e},d=s=>{const[a,u]=i.useState(6),m=c=>{u(c)};return p.jsx(e,{...s,handleChange:m,counter:a,dataId:"counter"})},t=d.bind({});t.args={max:999,min:5,label:"Counter label",customError:""};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [count, setCount] = useState(6);
  const onChange = (count: string | number | undefined) => {
    setCount(count as number);
  };
  return <_Counter {...args} handleChange={onChange} counter={count} dataId={'counter'} />;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const R=["Counter"];export{t as Counter,R as __namedExportsOrder,O as default};
