import{j as e}from"./jsx-runtime-DU-5m7M4.js";import{r as i}from"./iframe-DcyHMP67.js";import{M as C,N as I}from"./NestedMenu-B3e_4j9O.js";import{B as b}from"./Button-B8G1N1IN.js";import{I as y}from"./IconArrowDownloadFilled-DeR25hbT.js";import{I as g,a as h,b as x}from"./IconBeach-C7L7l5IN.js";import{I as M}from"./IconMore-CaBNLbAi.js";import{I as O}from"./IconCheckmark-BKjknDqW.js";import{I as n}from"./IconSettings-BvW5_6Vn.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B2KAd-sg.js";import"./index-CZ0OzgI-.js";import"./Text-B4Sig7fT.js";import"./helpers-COUuCC3n.js";import"./index-AboGxAif.js";import"./types-COg7qn9V.js";import"./index-D514jjvC.js";import"./Popover-B8_2nuJG.js";import"./IconDismiss-BilNhMTz.js";import"./Link-DI8K6FhR.js";import"./CollapseGroup-CmnQSYlp.js";import"./Divider-C3Zz51m0.js";import"./AnimatePresenceWrapper-170R43Ow.js";import"./IconChevronDown-CE_SNghI.js";import"./IconChevronUp-DPc592GV.js";import"./IconChevronRight-DWQ1Zj9P.js";import"./AvatarGroup-jxQD_Qof.js";import"./DropzoneFileUpload-CFuAVeUN.js";import"./Label-ofGXODwp.js";import"./useFormProps-Q9TLg1eW.js";import"./ErrorMessage-BTIir6Rg.js";import"./IconDynamicComponent-D4bJvOF9.js";import"./Snackbar-tAtuFkRO.js";import"./Alert-Dz2uOp01.js";import"./IconDismissFilled-B9x2l6fF.js";import"./Progress-COGNYndA.js";import"./IconAdd-FWfRmBcX.js";import"./Checkbox-B7ZUP2ZW.js";import"./IconInfo-qRIkGL5b.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
