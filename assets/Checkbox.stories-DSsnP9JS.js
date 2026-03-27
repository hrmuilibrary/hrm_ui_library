import{j as d}from"./jsx-runtime-Cc-SByNV.js";import{r as c}from"./iframe-BESH0ZRu.js";import{C as s}from"./Checkbox-Br5Y9_wM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-fQ655Ppb.js";import"./Popover-qH9fHl6q.js";import"./index-AboGxAif.js";import"./types-BTLoEQt4.js";import"./helpers-DC_cADke.js";import"./IconDismiss-BmBRX3xW.js";import"./Tooltip-BFQEBq7q.js";import"./Text-BBgmrqP6.js";import"./Button-CjUDU1V6.js";import"./Link-CJzB9Aib.js";import"./IconInfo-CT95hS3o.js";import"./IconDynamicComponent-ESUvog5V.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
