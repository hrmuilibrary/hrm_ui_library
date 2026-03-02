import{j as e}from"./jsx-runtime-DaLC6nBs.js";import{r as i}from"./iframe-BvvmSemO.js";import{M as C,N as I}from"./NestedMenu-D8QPODIX.js";import{B as b}from"./Button-BhplgRrt.js";import{I as y}from"./IconArrowDownloadFilled-BcgTTAhw.js";import{I as g,a as h,b as x}from"./IconBeach-DHlw8Kg8.js";import{I as M}from"./IconMore-ChvmTSn-.js";import{I as O}from"./IconCheckmark-BnnEOLYT.js";import{I as n}from"./IconSettings-gLbL9AJJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DmErFFHO.js";import"./index-r8nk0Inf.js";import"./Text-DefunVDP.js";import"./helpers-8_i-bo7d.js";import"./index-DYDl_GcV.js";import"./types--HW1TU83.js";import"./Popover-Bz2y6FFK.js";import"./IconDismiss-DGDF-8tJ.js";import"./Link-C3sNpXSc.js";import"./index-DBkx0a4z.js";import"./CollapseGroup-dFn1AZ1c.js";import"./Divider-CvSZiMj9.js";import"./AnimatePresenceWrapper-DMz9bZ3n.js";import"./IconChevronDown-DdkGEdiZ.js";import"./IconChevronUp-Ch3pM72L.js";import"./IconChevronRight-BwhIigs9.js";import"./AvatarGroup-DyeWgunS.js";import"./DropzoneFileUpload-DgIdxgXv.js";import"./Label-AbOCkMFt.js";import"./useFormProps-Dd8stXRo.js";import"./ErrorMessage-BEjmpnX6.js";import"./IconDynamicComponent-BLsdvZIk.js";import"./Snackbar-Ca4hvLFI.js";import"./Alert-br9TULiu.js";import"./IconDismissFilled-CmkbRQrS.js";import"./Progress-C-I1IqD1.js";import"./IconAdd-Cuacvkl8.js";import"./Checkbox-CHg650yf.js";import"./IconInfo-CJUwrubW.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
