import{j as e}from"./jsx-runtime-DJy9FXZX.js";import{r as i}from"./iframe-nKSTdc3o.js";import{M as C,N as I}from"./NestedMenu-Dih7WC0O.js";import{B as b}from"./Button-DHUrTz9s.js";import{I as y}from"./IconArrowDownloadFilled-m1urdzA3.js";import{I as g,a as h,b as x}from"./IconBeach-CttkJRY9.js";import{I as M}from"./IconMore-DY9retx7.js";import{I as O}from"./IconCheckmark-wb_dpqM8.js";import{I as n}from"./IconSettings-CW-WhWSM.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-gEaXXgRZ.js";import"./index-DoXjqEuT.js";import"./Text-S9RLM7JN.js";import"./helpers-h4yF730e.js";import"./index-AboGxAif.js";import"./types-CH1uZ_mO.js";import"./index-DIo5hza_.js";import"./Popover-DLq7t9Vy.js";import"./IconDismiss-BOpkG80-.js";import"./Link-BW5d6xQa.js";import"./CollapseGroup-SZF0TgPi.js";import"./Divider-xSPC_oI2.js";import"./AnimatePresenceWrapper-NsoVPxiq.js";import"./IconChevronDown-D5pjSoq1.js";import"./IconChevronUp-il8L1UQ5.js";import"./IconChevronRight-CFAANoQh.js";import"./AvatarGroup-t4J1NV4C.js";import"./DropzoneFileUpload-kOeW_dav.js";import"./Label-CMOAqvk0.js";import"./useFormProps-DOQupwFM.js";import"./ErrorMessage-B4eL7zuG.js";import"./IconDynamicComponent-knAVNmnA.js";import"./Snackbar-Dq4NY-qD.js";import"./Alert-DeHVgyOJ.js";import"./IconDismissFilled-C-F7Sg2T.js";import"./Progress-EnU_ZP6F.js";import"./IconAdd-DX-yKteo.js";import"./Checkbox-DLClgXxF.js";import"./IconInfo-CDb0V_Z7.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
