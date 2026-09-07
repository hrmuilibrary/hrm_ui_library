import{j as e}from"./jsx-runtime-eLskHub1.js";import{r as i}from"./iframe-CCA8howa.js";import{M as C,N as I}from"./NestedMenu-y91YHedS.js";import{B as b}from"./Button-uJWmugQC.js";import{I as y}from"./IconArrowDownloadFilled-C2xoatHg.js";import{I as g,a as h,b as x}from"./IconBeach-Bl2oYDyU.js";import{I as M}from"./IconMore-BGY6vcE0.js";import{I as O}from"./IconCheckmark-BX4Qf0h5.js";import{I as n}from"./IconSettings-AiYEx887.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Bvm4nk3g.js";import"./index-D-1MbwyK.js";import"./Text-CQrBgAQK.js";import"./helpers-CDZpRNsE.js";import"./index-AboGxAif.js";import"./types-B2i5IIBE.js";import"./index-Cw5hxcD_.js";import"./useOnOutsideClick-CCA1KmND.js";import"./CollapseGroup-ByXJMcIi.js";import"./Divider-CwqRGsXc.js";import"./AnimatePresenceWrapper-9ao3f5H7.js";import"./IconChevronDown-DwlHnBhw.js";import"./IconChevronUp-oWxA-1mn.js";import"./IconChevronRight-DTHUfQ0K.js";import"./AvatarGroup-Bz05vLnT.js";import"./DropzoneFileUpload-D84eqGQs.js";import"./Label-kHjGuaR6.js";import"./useFormProps-CJJUw6mk.js";import"./ErrorMessage-QCDO-32m.js";import"./IconDynamicComponent-CWHwBLok.js";import"./Snackbar-UGuqQTG4.js";import"./Alert-HhHdPQcf.js";import"./IconDismissFilled-DltkXsfY.js";import"./Progress-EO6nTUbw.js";import"./IconAdd-DeHLSeAq.js";import"./Checkbox-Bkh1aJBP.js";import"./Popover-DH-FN3UR.js";import"./IconDismiss-BCU1u5xd.js";import"./Link-DXGYqrz3.js";import"./IconInfo-DBKauIV4.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
