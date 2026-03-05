import{j as e}from"./jsx-runtime-D2jtCHOi.js";import{r as i}from"./iframe-BfwIK1ui.js";import{M as C,N as I}from"./NestedMenu-Boyzj0qd.js";import{B as b}from"./Button-8jAsoz4G.js";import{I as y}from"./IconArrowDownloadFilled-Dyb_uyWV.js";import{I as g,a as h,b as x}from"./IconBeach-CX8UTuyy.js";import{I as M}from"./IconMore-BnZtkwfq.js";import{I as O}from"./IconCheckmark-BwSIL4_y.js";import{I as n}from"./IconSettings-Cf7z95xB.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-COoKIpnB.js";import"./index-B_sF6Scw.js";import"./Text-C-olX5yF.js";import"./helpers-ByjcxY9i.js";import"./index-DYDl_GcV.js";import"./types-CgG8BAf6.js";import"./Popover-DHKrnluu.js";import"./IconDismiss-BL5cd890.js";import"./Link-DLKVUDag.js";import"./index-3yZ5Xhc7.js";import"./CollapseGroup-DXHjNC3c.js";import"./Divider-CdONYl79.js";import"./AnimatePresenceWrapper-DEuETPZt.js";import"./IconChevronDown-gevNUJ6X.js";import"./IconChevronUp-R01n71Fa.js";import"./IconChevronRight-3kYQfVX5.js";import"./AvatarGroup-BB4nbNBL.js";import"./DropzoneFileUpload-9ZdzBcbG.js";import"./Label-CzLyciBl.js";import"./useFormProps-BQYq2Dw9.js";import"./ErrorMessage-CyfdQqsC.js";import"./IconDynamicComponent-uWvTMi_Q.js";import"./Snackbar-CLJx7VTH.js";import"./Alert-Cc43fRj-.js";import"./IconDismissFilled-BKE2IGVh.js";import"./Progress-CyeACkoR.js";import"./IconAdd-CACU8M3x.js";import"./Checkbox-C6h5pU_V.js";import"./IconInfo-BKsEN15S.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
