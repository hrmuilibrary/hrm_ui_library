import{j as e}from"./jsx-runtime-BKD_WvF8.js";import{r as i}from"./iframe-B9fdRgoH.js";import{M as C,N as I}from"./NestedMenu-Cn4NOqT3.js";import{B as b}from"./Button-CVg82LGG.js";import{I as y}from"./IconArrowDownloadFilled-Bf0Wi4MI.js";import{I as g,a as h,b as x}from"./IconBeach-c3ta5Jzw.js";import{I as M}from"./IconMore-CYxV4cHA.js";import{I as O}from"./IconCheckmark-BgYrL-qS.js";import{I as n}from"./IconSettings-CtTmaQy1.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CcZQ6LMu.js";import"./index-BQe8DgU0.js";import"./Text-tjUpgYfB.js";import"./helpers-ZzQuR0Yr.js";import"./index-AboGxAif.js";import"./types-m-LJ5e63.js";import"./index-aqxgRizz.js";import"./useOnOutsideClick-8UOoY8bO.js";import"./CollapseGroup-PGXwELSq.js";import"./Divider-CE9tsuex.js";import"./AnimatePresenceWrapper-CR7t_rnE.js";import"./IconChevronDown-0kD1ukdE.js";import"./IconChevronUp-Bn83oBov.js";import"./IconChevronRight-Dw_jApkK.js";import"./AvatarGroup-bQuU-jzY.js";import"./DropzoneFileUpload-DWtACJRW.js";import"./Label-Bym6qUPb.js";import"./useFormProps-BEhaMOdD.js";import"./ErrorMessage-DSIcI7Pg.js";import"./IconDynamicComponent-CJIH-vd1.js";import"./Snackbar-BiiL5RSD.js";import"./Alert-FcKQD838.js";import"./IconDismissFilled-7sf8HQTu.js";import"./Progress-OGnmV_MT.js";import"./IconAdd-DV1Ehv3D.js";import"./Checkbox-BAEHQ0fQ.js";import"./Popover-BqZdz0vU.js";import"./IconDismiss-DmlqLLtx.js";import"./Link-Cxgj6Aq8.js";import"./IconInfo-CAIs_7lv.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
