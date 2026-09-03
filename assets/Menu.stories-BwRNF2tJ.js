import{j as e}from"./jsx-runtime-CixmCXYB.js";import{r as i}from"./iframe-CdU7qALN.js";import{M as C,N as I}from"./NestedMenu-DNbfEsCP.js";import{B as b}from"./Button-DfJvPqhN.js";import{I as y}from"./IconArrowDownloadFilled-CG65Mw_H.js";import{I as g,a as h,b as x}from"./IconBeach-xgcUA7hN.js";import{I as M}from"./IconMore-ClrWipaL.js";import{I as O}from"./IconCheckmark-D82v9nmd.js";import{I as n}from"./IconSettings-CCRXJq4u.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DTziODZP.js";import"./index-DE9b-KKH.js";import"./Text-My9GXrOB.js";import"./helpers-Bn2gO0KC.js";import"./index-AboGxAif.js";import"./types-BbW1ZtY6.js";import"./index-DhXq4NVr.js";import"./useOnOutsideClick-Ih5BL_8Y.js";import"./CollapseGroup-T6JVEMQ7.js";import"./Divider-DHBpIwQY.js";import"./AnimatePresenceWrapper-BeJlosC2.js";import"./IconChevronDown-xHZJGxLN.js";import"./IconChevronUp-DKo6nSmU.js";import"./IconChevronRight-Cm5n-qKA.js";import"./AvatarGroup-ChZTAl22.js";import"./DropzoneFileUpload-Cvr_RKU5.js";import"./Label-CUSgKQks.js";import"./useFormProps-DeoeMsol.js";import"./ErrorMessage-DGKMssSp.js";import"./IconDynamicComponent-DBtKiA4p.js";import"./Snackbar-BeqPvJAV.js";import"./Alert-C_R_-qNx.js";import"./IconDismissFilled-D1ciZdNY.js";import"./Progress-BoGqKv8q.js";import"./IconAdd-DvJuCMpJ.js";import"./Checkbox-BK2EqvJZ.js";import"./Popover-By9dlQl6.js";import"./IconDismiss-BnCR8okq.js";import"./Link-B6-6snZI.js";import"./IconInfo-Cq7cvRQG.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
