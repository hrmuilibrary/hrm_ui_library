import{j as r}from"./jsx-runtime-rmvHLVgd.js";import{r as s}from"./iframe-Dy6q0Da_.js";import{I as l}from"./Input-D-uq2ja7.js";import{P as f}from"./Popover-H6cUZQor.js";import{I as o}from"./IconInfo-ZZbIsE8D.js";import{I as h}from"./IconCalendarRight-CX8bnSPj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Do8fCJd2.js";import"./index-CvFVU3_3.js";import"./ErrorMessage-YqRcf1Al.js";import"./Text-DcVt_zKC.js";import"./helpers-D7YbQzvp.js";import"./IconDynamicComponent-0_YIpUIW.js";import"./Label-STgLI3mY.js";import"./IconCheckmarkCircleFilled-BxtScsXQ.js";import"./index-AboGxAif.js";import"./types-CivKHnvw.js";import"./useOnOutsideClick-D_ZIWdvO.js";import"./IconDismiss-DAJvoV8j.js";import"./Tooltip-DrDbSXzu.js";import"./Button-DdyCxxwE.js";import"./Link-Cg9gy77M.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value);
    setIsErrorVisible(true);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Input {...args} error={!value && isErrorVisible ? 'requeired field' : ''} currentValue={value} handleChange={changeHandler} />
    </div>;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const U=["Input"];export{e as Input,U as __namedExportsOrder,O as default};
