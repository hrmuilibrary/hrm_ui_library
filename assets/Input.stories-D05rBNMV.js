import{j as r}from"./jsx-runtime-Bw66X12A.js";import{r as s}from"./iframe-CeX1-gjJ.js";import{I as l}from"./Input-DjpwBeCa.js";import{P as f}from"./Popover-BwBJuNOg.js";import{I as o}from"./IconInfo-GzfDEuyh.js";import{I as h}from"./IconCalendarRight-ss1gQ6d1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWD8RMh7.js";import"./index-BD__mcW0.js";import"./ErrorMessage-6KEYMnYm.js";import"./Text-CstLxQu3.js";import"./helpers-Dz9wASXy.js";import"./IconDynamicComponent-D1dh44tt.js";import"./Label-C4wSnlQB.js";import"./IconCheckmarkCircleFilled-CXVjZMAe.js";import"./index-AboGxAif.js";import"./types-D6LX7z9i.js";import"./IconDismiss-D6pj47JF.js";import"./Tooltip-nUoB77zM.js";import"./Button-CW6ry4S_.js";import"./Link-Tab_qrHm.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Input"];export{e as Input,O as __namedExportsOrder,N as default};
