import{j as e}from"./jsx-runtime-sqNh90S7.js";import{r as i}from"./iframe-DqwhB-1s.js";import{M as C,N as I}from"./NestedMenu-7y95EnTp.js";import{B as b}from"./Button-CtEMQjRD.js";import{I as y}from"./IconArrowDownloadFilled-TesKF4L9.js";import{I as g,a as h,b as x}from"./IconBeach-Bni8NVSd.js";import{I as M}from"./IconMore-DesHfYeJ.js";import{I as O}from"./IconCheckmark-YMVFrPAW.js";import{I as n}from"./IconSettings-CI-RYMWF.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DXgoQNA1.js";import"./index-9crLbL5u.js";import"./Text-CTUlLneT.js";import"./helpers-Xd4iezhJ.js";import"./index-AboGxAif.js";import"./types-BE9Uy7k4.js";import"./index-Bah4Jefu.js";import"./Popover-Bf1D5cJ1.js";import"./IconDismiss-wOAYRLPb.js";import"./Link-OYcuBnwy.js";import"./CollapseGroup-DB9THeHG.js";import"./Divider-CJ8o99kf.js";import"./AnimatePresenceWrapper-rgBOQGj1.js";import"./IconChevronDown-DosNe7jO.js";import"./IconChevronUp-CBiTQ3Ew.js";import"./IconChevronRight-DGZUlx_U.js";import"./AvatarGroup-Dma-eqK7.js";import"./DropzoneFileUpload-DnssAilc.js";import"./Label-DKAzlle6.js";import"./useFormProps-BsOYjElj.js";import"./ErrorMessage-Aih1kOmH.js";import"./IconDynamicComponent-Budwiy3b.js";import"./Snackbar-CAlFzXJI.js";import"./Alert-C5In-A8N.js";import"./IconDismissFilled-BWaMZV_z.js";import"./Progress-CPkitKKY.js";import"./IconAdd-puCjffkz.js";import"./Checkbox-D38ZTVIE.js";import"./IconInfo-BOPYyBjF.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
