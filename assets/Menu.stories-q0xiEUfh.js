import{j as e}from"./jsx-runtime-CFhu-JeV.js";import{r as i}from"./iframe-DQtAU-_B.js";import{M as C,N as I}from"./NestedMenu-_7v9Uf69.js";import{B as b}from"./Button-Dl3PRofE.js";import{I as y}from"./IconArrowDownloadFilled-DhlBkmEw.js";import{I as g,a as h,b as x}from"./IconBeach-DW0QaRCB.js";import{I as M}from"./IconMore-CFDe60j6.js";import{I as O}from"./IconCheckmark-Bs_XxgVJ.js";import{I as n}from"./IconSettings-RKFpsmVx.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-D541dn1S.js";import"./index-D-9rOKPC.js";import"./Text-Cv6G_wdz.js";import"./helpers-DA3h6OxS.js";import"./index-DYDl_GcV.js";import"./types-DdTvgI_g.js";import"./Popover-Bq5us6Yd.js";import"./IconDismiss-pf2dowYZ.js";import"./Link-CuvKOss-.js";import"./index-9xzvwq9c.js";import"./CollapseGroup-D2spcx4h.js";import"./Divider-nGmW2U1-.js";import"./AnimatePresenceWrapper-DctS3uIO.js";import"./IconChevronDown-C5a45CrW.js";import"./IconChevronUp-Cx5L0k-U.js";import"./IconChevronRight-QUcKBJtq.js";import"./AvatarGroup-Cex8WJGm.js";import"./DropzoneFileUpload-CDhPxm52.js";import"./Label-BniV-b7a.js";import"./useFormProps-2rVL4WM6.js";import"./ErrorMessage-D9pthg9V.js";import"./IconDynamicComponent-BSQNhMP-.js";import"./Snackbar-BrJFarv2.js";import"./Alert-DS6J5RfG.js";import"./IconDismissFilled-BcKsAqSn.js";import"./Progress-Dvc0wHOc.js";import"./IconAdd-ZyQHeESA.js";import"./Checkbox-ZdZfCp59.js";import"./IconInfo-BTUFM5AO.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
