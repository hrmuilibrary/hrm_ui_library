import{j as d}from"./jsx-runtime-BWL0Uqfu.js";import{r as c}from"./iframe-CxYI0EWd.js";import{C as s}from"./Checkbox-DE_FgKiO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Du6-9Mdg.js";import"./Popover-DYInKUEg.js";import"./index-DYDl_GcV.js";import"./types-CyyjeX0T.js";import"./helpers-Me6vAPdm.js";import"./IconDismiss-C984OP64.js";import"./Tooltip-B02AfB-D.js";import"./Text-DbjSgsyH.js";import"./Button-DOL9xF0T.js";import"./Link-Bu32HQOo.js";import"./IconInfo-_4ulWNhk.js";import"./IconDynamicComponent-49CGwydg.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
