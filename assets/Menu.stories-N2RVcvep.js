import{j as e}from"./jsx-runtime-Deq49PtD.js";import{r as i}from"./iframe-VY33bBZC.js";import{M as C,N as I}from"./NestedMenu-DPoOGBq9.js";import{B as b}from"./Button-Ce8-J-1s.js";import{I as y}from"./IconArrowDownloadFilled-JapEMW14.js";import{I as g,a as h,b as x}from"./IconBeach-PmfXtRit.js";import{I as M}from"./IconMore-BdD9rIKV.js";import{I as O}from"./IconCheckmark-DsiJoI0N.js";import{I as n}from"./IconSettings-vhfn96QM.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-H4K3uVVd.js";import"./index-C0x--rAf.js";import"./Text-CEs2hxxX.js";import"./helpers-CBoNSfUf.js";import"./index-DYDl_GcV.js";import"./types-CxPK9San.js";import"./Popover-DOZOXEcl.js";import"./IconDismiss-CJgyTioh.js";import"./Link-Bvase3iq.js";import"./index-yOqzteEH.js";import"./CollapseGroup-oN6F9EQH.js";import"./Divider-0pIWeRJk.js";import"./AnimatePresenceWrapper-D2Ro9jOX.js";import"./IconChevronDown-BhUQLS_H.js";import"./IconChevronUp-ke31beQh.js";import"./IconChevronRight-1EY_2xGF.js";import"./AvatarGroup-7UCRlvWb.js";import"./DropzoneFileUpload-2icaLsI1.js";import"./Label-Cd3q7H6-.js";import"./useFormProps-DFQrYC3J.js";import"./ErrorMessage-ON8HmtLS.js";import"./IconDynamicComponent-Dylt8NvR.js";import"./Snackbar-CJjWhtlK.js";import"./Alert-zK4Nxk-o.js";import"./IconDismissFilled-DJVIflv9.js";import"./Progress-YexrY_8_.js";import"./IconAdd-F_UuAG9R.js";import"./Checkbox-XQH_HZmc.js";import"./IconInfo-CneAHasc.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
