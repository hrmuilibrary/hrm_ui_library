import{j as e}from"./jsx-runtime-Bx6nDAHA.js";import{r as i}from"./iframe-Djkj-SoK.js";import{M as C,N as I}from"./NestedMenu-BLMF9S3p.js";import{B as b}from"./Button-DGtMkrFa.js";import{I as y}from"./IconArrowDownloadFilled-D9Bjsdpv.js";import{I as g,a as h,b as x}from"./IconBeach-CZz2tht2.js";import{I as M}from"./IconMore-BLYNlBj_.js";import{I as O}from"./IconCheckmark-Cuc3_DS6.js";import{I as n}from"./IconSettings-DGohyh0K.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CD5NA4wG.js";import"./index-Do9ZPFz0.js";import"./Text-BA3vWX_v.js";import"./helpers-CYPKY3Aw.js";import"./index-DYDl_GcV.js";import"./types-DheOOxYx.js";import"./ModalConfirmation-C0Wha-Vs.js";import"./AnimatePresenceWrapper-D2MPT7fJ.js";import"./IconDismiss-D3OjUA0Z.js";import"./index-wtwexwNo.js";import"./CollapseGroup-BmFduRVs.js";import"./Divider-CgQ3Fpco.js";import"./IconChevronDown-DHEwYenT.js";import"./IconChevronUp-BlEVAEOx.js";import"./IconChevronRight-D1wX3y6w.js";import"./AvatarGroup-D4dISuW4.js";import"./DropzoneFileUpload-DDhjZWbv.js";import"./Label-BZ0ei0LK.js";import"./useFormProps-CU9PqKBi.js";import"./ErrorMessage-DCj2_rv7.js";import"./IconDynamicComponent-Dr8dKZi3.js";import"./IconDelete-DdeHxEl-.js";import"./Snackbar-SHxnnzNz.js";import"./Alert-5B-CmE5R.js";import"./IconDismissFilled-CZBLmHwX.js";import"./Progress-D3JTRu3r.js";import"./IconAdd-u1GrtDso.js";import"./Checkbox-CHGS2bKH.js";import"./Popover-C-aHFeXA.js";import"./Link-4gXTn82H.js";import"./IconInfo-Ba1SWCob.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
