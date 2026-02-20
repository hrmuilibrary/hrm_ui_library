import{j as e}from"./jsx-runtime-BIQybnMq.js";import{r as i}from"./iframe-DbnnnWY-.js";import{M as C,N as I}from"./NestedMenu-CX7sPrv9.js";import{B as b}from"./Button-DILmnUEh.js";import{I as y}from"./IconArrowDownloadFilled-n8ftz1hd.js";import{I as g,a as h,b as x}from"./IconBeach-xM64Unmt.js";import{I as M}from"./IconMore-BJQ7YgDQ.js";import{I as O}from"./IconCheckmark-gqAXV24a.js";import{I as n}from"./IconSettings-C1Vur02J.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-zPdjbHtu.js";import"./index-D12A_WaC.js";import"./Text-CV4vwRLK.js";import"./helpers-Bzb3uc2Y.js";import"./index-DYDl_GcV.js";import"./types-3dCisorJ.js";import"./Popover-CRsA_bPx.js";import"./IconDismiss-u5Ei1Bxc.js";import"./Link-CTRcObik.js";import"./index-DY9e7VHg.js";import"./CollapseGroup-b7Gwouil.js";import"./Divider-Co_HkttT.js";import"./AnimatePresenceWrapper-C0Hs73Ne.js";import"./IconChevronDown-CwkCnr3a.js";import"./IconChevronUp-CCVhFikH.js";import"./IconChevronRight-Cs-0HCJ7.js";import"./AvatarGroup-9AiNw8aW.js";import"./DropzoneFileUpload-lDeu5LdC.js";import"./Label-CSBPWmHI.js";import"./useFormProps-58u15XfS.js";import"./ErrorMessage-CAhpJ4_m.js";import"./IconDynamicComponent-DTRS-6LY.js";import"./Snackbar-CNuruYLc.js";import"./Alert-5z7d8Xcu.js";import"./IconDismissFilled-CozUMxDd.js";import"./Progress-D0j1QvD1.js";import"./IconAdd-DkVpHr_E.js";import"./Checkbox-Br4-7Msn.js";import"./IconInfo-YY-i76To.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
