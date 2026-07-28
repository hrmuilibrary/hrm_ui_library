import{j as r}from"./jsx-runtime-BKD_WvF8.js";import{r as s}from"./iframe-B9fdRgoH.js";import{I as l}from"./Input-EOfoKtMz.js";import{P as f}from"./Popover-BqZdz0vU.js";import{I as o}from"./IconInfo-CAIs_7lv.js";import{I as h}from"./IconCalendarRight-B_Eii1dC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aqxgRizz.js";import"./index-BQe8DgU0.js";import"./ErrorMessage-DSIcI7Pg.js";import"./Text-tjUpgYfB.js";import"./helpers-ZzQuR0Yr.js";import"./IconDynamicComponent-CJIH-vd1.js";import"./Label-Bym6qUPb.js";import"./IconCheckmarkCircleFilled-DHL8Zzp1.js";import"./index-AboGxAif.js";import"./types-m-LJ5e63.js";import"./useOnOutsideClick-8UOoY8bO.js";import"./IconDismiss-DmlqLLtx.js";import"./Tooltip-CcZQ6LMu.js";import"./Button-CVg82LGG.js";import"./Link-Cxgj6Aq8.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
