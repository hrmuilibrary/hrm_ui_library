import{j as e}from"./jsx-runtime-f-dUYu1a.js";import{r as i}from"./iframe-BiktHSUC.js";import{M as C,N as I}from"./NestedMenu-DqBKKW3v.js";import{B as b}from"./Button-9qZLQHXT.js";import{I as y}from"./IconArrowDownloadFilled-BPvmKhBk.js";import{I as g,a as h,b as x}from"./IconBeach-lEslDyBr.js";import{I as M}from"./IconMore-BDJVQARZ.js";import{I as O}from"./IconCheckmark-DYDGwbij.js";import{I as n}from"./IconSettings-xscq5WtF.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-3h1SBzwY.js";import"./index-tI2UK4-g.js";import"./Text-BoOnDVRD.js";import"./helpers-CaQtlEgt.js";import"./index-AboGxAif.js";import"./types-DytdYKgc.js";import"./index-DqdLf-ca.js";import"./Popover-D7dMNzeY.js";import"./IconDismiss-vKBOxKjf.js";import"./Link-ClHy5XMJ.js";import"./CollapseGroup-CwWtbnay.js";import"./Divider-BnLMOCJX.js";import"./AnimatePresenceWrapper-CPHX6wq9.js";import"./IconChevronDown-Dfb5Hwhn.js";import"./IconChevronUp-BbEXsIq9.js";import"./IconChevronRight-XZmgQKrB.js";import"./AvatarGroup-DCEehN8J.js";import"./DropzoneFileUpload-CildH1Gq.js";import"./Label-Cn_G03Ac.js";import"./useFormProps-Cc4EuVfq.js";import"./ErrorMessage-BswH5BLn.js";import"./IconDynamicComponent-DWD1jhD6.js";import"./Snackbar-CG7JDy5m.js";import"./Alert-CUwkSMmA.js";import"./IconDismissFilled-CCn9J9Z-.js";import"./Progress-CtDF-OkX.js";import"./IconAdd-BUQ3xiBT.js";import"./Checkbox-CuloS3pM.js";import"./IconInfo-CljKZyi3.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
