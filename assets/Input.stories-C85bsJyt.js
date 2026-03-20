import{j as r}from"./jsx-runtime-CvWhM1C9.js";import{r as s}from"./iframe-DZT7gpxO.js";import{I as l}from"./Input-BZyLKOqb.js";import{P as f}from"./Popover-CJW9UZJ9.js";import{I as o}from"./IconInfo-D2KLaeuw.js";import{I as h}from"./IconCalendarRight-DOQeWHZj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DhSoYT6F.js";import"./index-Bbs0tBh8.js";import"./ErrorMessage-3RjkZP3s.js";import"./Text-C-jsFUx0.js";import"./helpers-Cfueoex7.js";import"./IconDynamicComponent--rY1R91H.js";import"./Label-JhzPIKFL.js";import"./IconCheckmarkCircleFilled-CbNGfZvt.js";import"./index-DYDl_GcV.js";import"./types-BGWVZg8K.js";import"./IconDismiss-CQnJUtGM.js";import"./Tooltip-Dn9827Tf.js";import"./Button-DoiFIr4a.js";import"./Link-DeWOtt-A.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
