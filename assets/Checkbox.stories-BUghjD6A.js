import{j as d}from"./jsx-runtime-96Wg0gMf.js";import{r as c}from"./iframe-Cvv3kum1.js";import{C as s}from"./Checkbox-D6wQDm-O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-9VYrzV.js";import"./Popover-CsfQpj4H.js";import"./index-DYDl_GcV.js";import"./types-DN5MOBJf.js";import"./helpers-C6rmQpZ-.js";import"./IconDismiss-DM1fMKIB.js";import"./Tooltip-0c6HuLXZ.js";import"./Text-CG9W3FPS.js";import"./Button-C7IuxvuL.js";import"./Link-BlhJREZr.js";import"./IconInfo-DprYm42v.js";import"./IconDynamicComponent-nkQdiggN.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
