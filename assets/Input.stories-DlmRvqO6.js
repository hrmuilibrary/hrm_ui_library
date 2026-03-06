import{j as r}from"./jsx-runtime-BWL0Uqfu.js";import{r as s}from"./iframe-CxYI0EWd.js";import{I as l}from"./Input-BPVmjdAi.js";import{P as f}from"./Popover-DYInKUEg.js";import{I as o}from"./IconInfo-_4ulWNhk.js";import{I as h}from"./IconCalendarRight-d7HZa3bz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-bcskSfJh.js";import"./index-Du6-9Mdg.js";import"./ErrorMessage-ZSw-FjO6.js";import"./Text-DbjSgsyH.js";import"./helpers-Me6vAPdm.js";import"./IconDynamicComponent-49CGwydg.js";import"./Label-DIp6Fp5-.js";import"./IconCheckmarkCircleFilled-PEcPMxgt.js";import"./index-DYDl_GcV.js";import"./types-CyyjeX0T.js";import"./IconDismiss-C984OP64.js";import"./Tooltip-B02AfB-D.js";import"./Button-DOL9xF0T.js";import"./Link-Bu32HQOo.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
