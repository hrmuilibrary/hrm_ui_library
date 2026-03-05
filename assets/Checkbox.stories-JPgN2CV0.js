import{j as d}from"./jsx-runtime-iut7bCLI.js";import{r as c}from"./iframe-DMdrSwrB.js";import{C as s}from"./Checkbox-C8etayjj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFpEcNpv.js";import"./Popover-CQGfM3xk.js";import"./index-DYDl_GcV.js";import"./types-obu7jrHv.js";import"./helpers-UaYMJ5Lz.js";import"./IconDismiss-D8ZBO6ts.js";import"./Tooltip-BEnh0xUy.js";import"./Text-Csbx5Mpb.js";import"./Button-BucxkUHf.js";import"./Link-BRXpJSfl.js";import"./IconInfo-iFnVagDf.js";import"./IconDynamicComponent-CGVNtfYX.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
