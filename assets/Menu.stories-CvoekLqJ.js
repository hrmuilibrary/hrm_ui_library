import{j as e}from"./jsx-runtime-Dj-1N4kP.js";import{r as i}from"./iframe-BW6qrJd0.js";import{M as C,N as I}from"./NestedMenu-CpYfVwyk.js";import{B as b}from"./Button-ByO1cT_B.js";import{I as y}from"./IconArrowDownloadFilled-CPk2P8eh.js";import{I as g,a as h,b as x}from"./IconBeach-By-zHScl.js";import{I as M}from"./IconMore-tG2YN07R.js";import{I as O}from"./IconCheckmark-BNA5abUP.js";import{I as n}from"./IconSettings-DlVqndTt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Blofrkpi.js";import"./index-BucjkSPe.js";import"./Text-CiKfN369.js";import"./helpers-CMzdqU8d.js";import"./index-DYDl_GcV.js";import"./types-Ciw2WWr_.js";import"./Popover-CHKJxmM1.js";import"./IconDismiss-BW1slJaZ.js";import"./Link-CzFaQGg2.js";import"./index-mZM88a4Z.js";import"./CollapseGroup-ie--3Uvc.js";import"./Divider-DxfR80Fp.js";import"./AnimatePresenceWrapper-B6Zy5ON4.js";import"./IconChevronDown-Do8ZKWJ6.js";import"./IconChevronUp-CI1P2nSW.js";import"./IconChevronRight-DbNiXG_h.js";import"./AvatarGroup-u1qioCwJ.js";import"./DropzoneFileUpload-BQsyMK4Y.js";import"./Label-ycAomoV_.js";import"./useFormProps-DdzaBnfC.js";import"./ErrorMessage-31IhDhSP.js";import"./IconDynamicComponent-BJNL2pc_.js";import"./Snackbar-CrY3lgbF.js";import"./Alert-e8KEv15l.js";import"./IconDismissFilled-C3x31Y0r.js";import"./Progress-D21lTS0s.js";import"./IconAdd-PaqhTdRI.js";import"./Checkbox-B8BahYWB.js";import"./IconInfo-Bhawo_dY.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
