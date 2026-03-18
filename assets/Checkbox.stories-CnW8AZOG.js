import{j as d}from"./jsx-runtime-BfBrHJXq.js";import{r as c}from"./iframe-BtDxg51D.js";import{C as s}from"./Checkbox-3aXyi6YR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-6XlGGvnb.js";import"./Popover-DH1kacr5.js";import"./index-DYDl_GcV.js";import"./types-BTm4fvKQ.js";import"./helpers-BoUXUw-g.js";import"./IconDismiss-COFd7T7I.js";import"./Tooltip-BTmjVFND.js";import"./Text-BPGIataE.js";import"./Button-BHvyWmLO.js";import"./Link-DzSORBi2.js";import"./IconInfo-CTwSDT5n.js";import"./IconDynamicComponent-CHOqZ7kP.js";const S={title:"Checkbox",component:s,argTypes:{}},n=a=>{const[i,p]=c.useState(!1);return d.jsx(s,{...a,selectedValue:i,onClick:p,popoverAddons:{id:"some-id",text:"hello-popover",dataId:"test"}})},e=n.bind({});e.args={dataId:"id",disabled:!1,required:!1,isInvalid:!1,label:"Label for checkbox",link:"/about",beforeLink:"das",afterLink:"after-link",helperText:"helper text"};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <_Checkbox {...args} selectedValue={isChecked} onClick={setIsChecked} popoverAddons={{
    id: 'some-id',
    text: 'hello-popover',
    dataId: 'test'
  }} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Checkbox"];export{e as Checkbox,T as __namedExportsOrder,S as default};
