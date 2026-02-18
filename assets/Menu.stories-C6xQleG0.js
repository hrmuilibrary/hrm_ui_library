import{j as e}from"./jsx-runtime-BoRs7bpF.js";import{r as i}from"./iframe-DcP3ocjm.js";import{M as C,N as I}from"./NestedMenu-sVGGuTwp.js";import{B as b}from"./Button-MCqteBOR.js";import{I as y}from"./IconArrowDownloadFilled-DhYHy6a1.js";import{I as g,a as h,b as x}from"./IconBeach-BCr6lmzp.js";import{I as M}from"./IconMore-Bps77los.js";import{I as O}from"./IconCheckmark-DFYWtvqC.js";import{I as n}from"./IconSettings-CMxCbwmN.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DXQclReM.js";import"./index-IaqrroEN.js";import"./Text-BTL3aUEW.js";import"./helpers-r_FRjBGO.js";import"./index-DYDl_GcV.js";import"./types-DeDHadih.js";import"./ModalConfirmation-z0MUcuKe.js";import"./IconDismiss-BXVZllgV.js";import"./index-DVc7uGLu.js";import"./CollapseGroup-BsWm27HB.js";import"./Divider-Cu8sZYDK.js";import"./AnimatePresenceWrapper-qv7MG2xZ.js";import"./IconChevronDown-DFYbBBAP.js";import"./IconChevronUp-D88bbWKO.js";import"./IconChevronRight-DHnunI_C.js";import"./AvatarGroup-Cf0FjgKA.js";import"./DropzoneFileUpload-D5v-qqnw.js";import"./Label-BCMiKTVx.js";import"./useFormProps-Dl9uZZ3R.js";import"./ErrorMessage-WbykENU7.js";import"./IconDynamicComponent-5hqTCx2R.js";import"./IconDelete-AUs3t75i.js";import"./Snackbar-Bo2ej1z9.js";import"./Alert-BpE1T6fd.js";import"./IconDismissFilled-DB8ZJL6H.js";import"./Progress-EXgCM5rD.js";import"./IconAdd-Dnb15O_G.js";import"./Checkbox-CzpKrjB3.js";import"./Popover-lnDtQEyk.js";import"./Link-zfTArDCr.js";import"./IconInfo-BoE_bFRy.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
