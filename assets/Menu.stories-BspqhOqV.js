import{j as e}from"./jsx-runtime-f4W9F4p-.js";import{r as i}from"./iframe-BKYlKyI2.js";import{M as C,N as I}from"./NestedMenu-CCPKyCQ6.js";import{B as b}from"./Button-DC7__7_H.js";import{I as y}from"./IconArrowDownloadFilled-CzpnkYS5.js";import{I as g,a as h,b as x}from"./IconBeach-CLkHk8-6.js";import{I as M}from"./IconMore-BXPSTVaE.js";import{I as O}from"./IconCheckmark-CPHNnevw.js";import{I as n}from"./IconSettings-BnNYesyo.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DCgOp9oq.js";import"./index-DrPTCK4H.js";import"./Text-BaBfS14w.js";import"./helpers-BrDgkfbG.js";import"./index-AboGxAif.js";import"./types-By8Py-lx.js";import"./Popover-DgTz9DGJ.js";import"./IconDismiss-C8N8hd4z.js";import"./Link-DIcCdqcp.js";import"./index-CYoGDo1s.js";import"./CollapseGroup-CZA9ip7U.js";import"./Divider-Bo3hOeqj.js";import"./AnimatePresenceWrapper-BLi3mM70.js";import"./IconChevronDown-CjCKOUH1.js";import"./IconChevronUp-Baff_IHn.js";import"./IconChevronRight-CPMcy9o2.js";import"./AvatarGroup-ccyekno3.js";import"./DropzoneFileUpload-BNiSXRJG.js";import"./Label-DudouxP4.js";import"./useFormProps-CNZjDzoX.js";import"./ErrorMessage-SoAMfuiJ.js";import"./IconDynamicComponent-7RVpD5Sh.js";import"./Snackbar-bY_LlQHV.js";import"./Alert-i7cY_g_A.js";import"./IconDismissFilled-zuzCing3.js";import"./Progress-DoGv4VJJ.js";import"./IconAdd-DCSquBKY.js";import"./Checkbox-BjImivQe.js";import"./IconInfo-DYN2DwjR.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
