import{j as e}from"./jsx-runtime-hG3Vka6i.js";import{r as i}from"./iframe-G8znBDlN.js";import{M as C,N as I}from"./NestedMenu-Cdbtduuq.js";import{B as b}from"./Button-DSZy3bBL.js";import{I as y}from"./IconArrowDownloadFilled-DK9C1cel.js";import{I as g,a as h,b as x}from"./IconBeach-btv6ra_m.js";import{I as M}from"./IconMore-BuTTWcaH.js";import{I as O}from"./IconCheckmark-BItL69QY.js";import{I as n}from"./IconSettings-CIdNL9_O.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CqiyEJp-.js";import"./index-BzgLc-4F.js";import"./Text-BGs7_8FC.js";import"./helpers-DAKI7Y_y.js";import"./index-AboGxAif.js";import"./types-DFaGMykD.js";import"./index-C-kaY9gP.js";import"./useOnOutsideClick-Dgd-DzgO.js";import"./CollapseGroup-D259nat-.js";import"./Divider-B3bgZ_lb.js";import"./AnimatePresenceWrapper-Dz7dp8md.js";import"./IconChevronDown-ejurxn0Y.js";import"./IconChevronUp-DXANjAsr.js";import"./IconChevronRight-CkNN9K2i.js";import"./AvatarGroup-DVdCvIGi.js";import"./DropzoneFileUpload-qRR7ozed.js";import"./Label-Bi9Do9zE.js";import"./useFormProps-DIAcs8Th.js";import"./ErrorMessage-DV_eGs6U.js";import"./IconDynamicComponent-tVGzrZ1J.js";import"./Snackbar-Dm7j2Fao.js";import"./Alert-BzwGgBaF.js";import"./IconDismissFilled-BFYGdTbD.js";import"./Progress-DBlpAY-V.js";import"./IconAdd-gMeyH_SX.js";import"./Checkbox-B1e--pnO.js";import"./Popover-DhLB_qpy.js";import"./IconDismiss-BzVgVY58.js";import"./Link-svha7DwQ.js";import"./IconInfo-DrOOWeaC.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
