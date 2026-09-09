import{j as e}from"./jsx-runtime-DK5slGhw.js";import{r as i}from"./iframe-2UaXNgNk.js";import{M as C,N as I}from"./NestedMenu-Bweg7lBa.js";import{B as b}from"./Button-Ddf_HUbH.js";import{I as y}from"./IconArrowDownloadFilled-nWAlFqCu.js";import{I as g,a as h,b as x}from"./IconBeach-94C1bxkm.js";import{I as M}from"./IconMore-yLs9BoZ_.js";import{I as O}from"./IconCheckmark-DzPazXXv.js";import{I as n}from"./IconSettings-C-fqUGFK.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C_yLzwVI.js";import"./index-C55PVzBv.js";import"./Text-g-UemA-b.js";import"./helpers-B4heV1fG.js";import"./index-AboGxAif.js";import"./types-vJhoobQp.js";import"./index-BhNj0SnX.js";import"./useOnOutsideClick-XWrcSV_h.js";import"./CollapseGroup-0E9pWIU8.js";import"./Divider-BulYIZa5.js";import"./AnimatePresenceWrapper-BVeEEtZm.js";import"./IconChevronDown-CBKoYga3.js";import"./IconChevronUp-BiTX0I33.js";import"./IconChevronRight-BkvhX5N0.js";import"./AvatarGroup-DWKzo63X.js";import"./DropzoneFileUpload-CM0xtFOJ.js";import"./Label-DhA_REqc.js";import"./useFormProps-DwPACFt_.js";import"./ErrorMessage-qAg--REb.js";import"./IconDynamicComponent-DN6dJWK4.js";import"./Snackbar-B92k8iEc.js";import"./Alert-BX587_gb.js";import"./IconDismissFilled-Br_f6YJ6.js";import"./Progress-CE3qHNOh.js";import"./IconAdd-w59Df1rN.js";import"./Checkbox-Bqx3i0nI.js";import"./Popover-CbV0BT_c.js";import"./IconDismiss-D0L7x1fB.js";import"./Link-C2PNwroa.js";import"./IconInfo-DPdCec5V.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
