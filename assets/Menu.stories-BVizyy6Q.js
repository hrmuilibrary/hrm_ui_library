import{j as e}from"./jsx-runtime-D8Aae-ON.js";import{r as i}from"./iframe-B81V5N6F.js";import{M as C,N as I}from"./NestedMenu-D-EGEtYV.js";import{B as b}from"./Button-BGtuaa-S.js";import{I as y}from"./IconArrowDownloadFilled-BledpFkq.js";import{I as g,a as h,b as x}from"./IconBeach-u18u0lSo.js";import{I as M}from"./IconMore-Y79DM_G1.js";import{I as O}from"./IconCheckmark-B986z6yw.js";import{I as n}from"./IconSettings-Bz7JAbHv.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C6M5Mvwj.js";import"./index-CVLUGf02.js";import"./Text-CFXTsjcN.js";import"./helpers-B_1klYl0.js";import"./index-DYDl_GcV.js";import"./types-BSP-PZIs.js";import"./ModalConfirmation-DFbHssQv.js";import"./AnimatePresenceWrapper-Cu27zq0p.js";import"./IconDismiss-C_Gh5jDC.js";import"./index-BkXCiaA0.js";import"./CollapseGroup-BtBYUYOZ.js";import"./Divider-B_8Oh8cB.js";import"./IconChevronDown-BKbsUEGC.js";import"./IconChevronUp-JTjQ9eEE.js";import"./IconChevronRight-2biQypoI.js";import"./AvatarGroup-Dg3R56Ta.js";import"./DropzoneFileUpload--ulgiC-A.js";import"./Label-4tt216Fv.js";import"./useFormProps-DtuzyFKZ.js";import"./ErrorMessage-DGYZ5GRk.js";import"./IconDynamicComponent-B8iT7Oal.js";import"./IconDelete-DyQ_33-n.js";import"./Snackbar-CrKzW5vC.js";import"./Alert-D2dknDYi.js";import"./IconDismissFilled-DF3etHKr.js";import"./Progress-Doq3EprY.js";import"./IconAdd-ple2_8in.js";import"./Checkbox-DuTYFuhl.js";import"./Popover-DiC5FQ_W.js";import"./Link-DH9fwRXX.js";import"./IconInfo-7omR3vNU.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
