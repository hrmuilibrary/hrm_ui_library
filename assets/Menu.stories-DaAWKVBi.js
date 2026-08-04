import{j as e}from"./jsx-runtime-jQRlJpq_.js";import{r as i}from"./iframe-IekmBLgU.js";import{M as C,N as I}from"./NestedMenu-nGLaFoCE.js";import{B as b}from"./Button-M3xTZvml.js";import{I as y}from"./IconArrowDownloadFilled-r7HG-K5i.js";import{I as g,a as h,b as x}from"./IconBeach-D-MiSes-.js";import{I as M}from"./IconMore-DKWseIV1.js";import{I as O}from"./IconCheckmark-BBgK2Qal.js";import{I as n}from"./IconSettings-AeoqH0MM.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-D1GLgbID.js";import"./index-BOjMRMBe.js";import"./Text-DDH3SuXY.js";import"./helpers-CyjX8nkc.js";import"./index-AboGxAif.js";import"./types-Bkil3lR1.js";import"./index-z1LVnpwX.js";import"./useOnOutsideClick-DMAjmAhg.js";import"./CollapseGroup-BpF-GN88.js";import"./Divider-D-fsHD8r.js";import"./AnimatePresenceWrapper-C3yWW4e_.js";import"./IconChevronDown-CI7EmJqt.js";import"./IconChevronUp-Dj6JHzCH.js";import"./IconChevronRight-BQFrXkAz.js";import"./AvatarGroup-CF9IQM0Y.js";import"./DropzoneFileUpload-DOHCrzQo.js";import"./Label-B2H_cz-p.js";import"./useFormProps-Cbvvev0C.js";import"./ErrorMessage-B-5yUWUJ.js";import"./IconDynamicComponent-CGHa6Li-.js";import"./Snackbar-De5mANEK.js";import"./Alert-DGYkq61k.js";import"./IconDismissFilled-Ct90Dzog.js";import"./Progress-CK7h180n.js";import"./IconAdd-B3wwMUKA.js";import"./Checkbox-Cau7Ab4I.js";import"./Popover-Dd2cB0Xp.js";import"./IconDismiss-DR6bLB6k.js";import"./Link-DDgCPqn6.js";import"./IconInfo-BT9_gA0R.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
