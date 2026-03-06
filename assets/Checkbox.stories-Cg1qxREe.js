import{j as d}from"./jsx-runtime-CFhu-JeV.js";import{r as c}from"./iframe-DQtAU-_B.js";import{C as s}from"./Checkbox-ZdZfCp59.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D-9rOKPC.js";import"./Popover-Bq5us6Yd.js";import"./index-DYDl_GcV.js";import"./types-DdTvgI_g.js";import"./helpers-DA3h6OxS.js";import"./IconDismiss-pf2dowYZ.js";import"./Tooltip-D541dn1S.js";import"./Text-Cv6G_wdz.js";import"./Button-Dl3PRofE.js";import"./Link-CuvKOss-.js";import"./IconInfo-BTUFM5AO.js";import"./IconDynamicComponent-BSQNhMP-.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
