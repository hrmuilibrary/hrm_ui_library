import{j as e}from"./jsx-runtime-CXGOtVTx.js";import{r as i}from"./iframe-DWMiYP_w.js";import{M as C,N as I}from"./NestedMenu-BdcrjpzU.js";import{B as b}from"./Button-DAfneLsq.js";import{I as y}from"./IconArrowDownloadFilled-DeU_cENa.js";import{I as g,a as h,b as x}from"./IconBeach-DZW5WHTC.js";import{I as M}from"./IconMore-EDIN4LVf.js";import{I as O}from"./IconCheckmark-0_rFbR2V.js";import{I as n}from"./IconSettings-CkCbMvt1.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CMOFyQDx.js";import"./index-DHC8ksM_.js";import"./Text-vzw9yN9Q.js";import"./helpers-BkfYO7hV.js";import"./index-DYDl_GcV.js";import"./types-BDdG7jR_.js";import"./Popover-BrMASA12.js";import"./IconDismiss-DqOVmjgP.js";import"./Link-C7haWBt-.js";import"./index-CyOmgsHL.js";import"./CollapseGroup-CPGWz_Oa.js";import"./Divider-CASwjxEi.js";import"./AnimatePresenceWrapper-C3QiHmBD.js";import"./IconChevronDown-C3F2Gywn.js";import"./IconChevronUp-D6m0jq_9.js";import"./IconChevronRight-BkqxWA4Y.js";import"./AvatarGroup-DgSWsayl.js";import"./DropzoneFileUpload-qRXGHUHz.js";import"./Label-DxT7DAa_.js";import"./useFormProps-DWoc6nES.js";import"./ErrorMessage-PgUDJOqQ.js";import"./IconDynamicComponent-DAuz8Wep.js";import"./Snackbar-CeIbipqq.js";import"./Alert-mJKhfAwT.js";import"./IconDismissFilled-BdQeewO2.js";import"./Progress-CQbIKlaY.js";import"./IconAdd-BsBNhF2w.js";import"./Checkbox-CLcSwWV3.js";import"./IconInfo-EcNoypFf.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
