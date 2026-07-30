import{j as e}from"./jsx-runtime-C4K87kpF.js";import{r as i}from"./iframe-D7gGfimV.js";import{M as C,N as I}from"./NestedMenu-BtfYrNsj.js";import{B as b}from"./Button-Lea6INg4.js";import{I as y}from"./IconArrowDownloadFilled-G-3lmNso.js";import{I as g,a as h,b as x}from"./IconBeach-ClxkvlY0.js";import{I as M}from"./IconMore-CHXrLJuJ.js";import{I as O}from"./IconCheckmark-BLNdgMce.js";import{I as n}from"./IconSettings-DJw5ppea.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-T_hCpr1Q.js";import"./index-Druv-95f.js";import"./Text-D9dxO0kc.js";import"./helpers-Bbo-bRx-.js";import"./index-AboGxAif.js";import"./types-CQFchTSI.js";import"./index-CKY604no.js";import"./useOnOutsideClick-CBCnVETO.js";import"./CollapseGroup-Q9wpyrrE.js";import"./Divider-BrwnnFqU.js";import"./AnimatePresenceWrapper-CSH82UfP.js";import"./IconChevronDown--AlmtzyN.js";import"./IconChevronUp-DFuxEF2b.js";import"./IconChevronRight-D4uNKR-X.js";import"./AvatarGroup-C8r5pGTl.js";import"./DropzoneFileUpload-6R5wy1H6.js";import"./Label-BbsN38VY.js";import"./useFormProps-Cez2vsex.js";import"./ErrorMessage-D49LoX2b.js";import"./IconDynamicComponent-DIfvB8RK.js";import"./Snackbar-DvXF83lQ.js";import"./Alert-gAHAhnr6.js";import"./IconDismissFilled-CMRv8a4O.js";import"./Progress-DM0S-Qld.js";import"./IconAdd-COi9ZhWB.js";import"./Checkbox-D2DwpL6d.js";import"./Popover-vczLwXr-.js";import"./IconDismiss-DYR7rw3r.js";import"./Link-4HKqUQI6.js";import"./IconInfo-DZoMM_Wd.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
