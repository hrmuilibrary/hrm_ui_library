import{j as d}from"./jsx-runtime-BcRMXQyU.js";import{r as c}from"./iframe-BmPqtltp.js";import{C as s}from"./Checkbox-CWt2nQTf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4zDiMuM.js";import"./Popover-BZqhUUzn.js";import"./index-AboGxAif.js";import"./types-DKrvdElD.js";import"./helpers-BSfmB4bo.js";import"./IconDismiss-BHf4nfNZ.js";import"./Tooltip-DCyFeIsx.js";import"./Text-CEYn29Gb.js";import"./Button-DZDCfiqQ.js";import"./Link-CGW62roK.js";import"./IconInfo-xonxLAw7.js";import"./IconDynamicComponent-CRdYp_EF.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
