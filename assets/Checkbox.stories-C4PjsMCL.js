import{j as d}from"./jsx-runtime-BNdl7zfN.js";import{r as c}from"./iframe-DdJqbjP1.js";import{C as s}from"./Checkbox-9VOKKy9q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C2AFq9e_.js";import"./Popover-C12aqYBI.js";import"./index-AboGxAif.js";import"./types-CkOs2gdt.js";import"./helpers-tWzEQIDg.js";import"./IconDismiss-BgUVP6Jy.js";import"./Tooltip-B0Q1rQC3.js";import"./Text-l0k1Tvx0.js";import"./index-BE5nffgT.js";import"./Button-DliJ8OC0.js";import"./Link-D8SSI2hV.js";import"./IconInfo-DArYuN7y.js";import"./IconDynamicComponent-Bm4JBm7i.js";const S={title:"Checkbox",component:s,argTypes:{}},m=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataTestId:"test"}})},e=m.bind({});e.args={dataTestId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataTestId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const A=["Checkbox"];export{e as Checkbox,A as __namedExportsOrder,S as default};
