import{j as d}from"./jsx-runtime-jyUgkTw7.js";import{r as c}from"./iframe-BdEtFhyL.js";import{C as s}from"./Checkbox-u_igeAYF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bh5VEtIv.js";import"./Popover-3q1vxCz9.js";import"./index-AboGxAif.js";import"./types-B10J7gf9.js";import"./helpers-BrcKB9Vj.js";import"./IconDismiss-BfJIZhJ3.js";import"./Tooltip-Cfj99ue9.js";import"./Text-BIsmiTeW.js";import"./Button-DNFyd_v_.js";import"./Link-DCM8Pc9p.js";import"./IconInfo-O0DrFVue.js";import"./IconDynamicComponent-DnCVpLmA.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
