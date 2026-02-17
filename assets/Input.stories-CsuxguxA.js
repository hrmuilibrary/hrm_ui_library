import{j as r}from"./jsx-runtime-CxhKFHZr.js";import{r as o}from"./iframe-VzCerQux.js";import{I as l}from"./Input-CU9BfNw0.js";import{P as f}from"./Popover-DaDvSpDq.js";import{I as s}from"./IconInfo-D9ZHhvIW.js";import{I as h}from"./IconCalendarRight-CEA6MreU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNlpyWB8.js";import"./index-cSRylV67.js";import"./ErrorMessage-BZZ1OfkZ.js";import"./Text-D7dqKhdH.js";import"./helpers-Boudrv2M.js";import"./IconDynamicComponent-DCRsLrVi.js";import"./Label-DvqitQfR.js";import"./IconCheckmarkCircleFilled-CnuStlQJ.js";import"./ModalConfirmation-DppWte2w.js";import"./AnimatePresenceWrapper-C4hZY9Y9.js";import"./types-C5DXKe7z.js";import"./IconDismiss-Cmt9EbFe.js";import"./Tooltip-FQ2Ypypw.js";import"./index-DYDl_GcV.js";import"./Button-CTLExGhq.js";import"./Link-A-bGjn-u.js";const U={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=o.useState(""),[u,c]=o.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:s},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(s,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["Input"];export{e as Input,$ as __namedExportsOrder,U as default};
