import{j as e}from"./jsx-runtime-DECM8Th-.js";import{r as i}from"./iframe-D4q3VZ8i.js";import{M as C,N as I}from"./NestedMenu-2oNNSXY_.js";import{B as b}from"./Button-V3TRdi2d.js";import{I as y}from"./IconArrowDownloadFilled-Ozh_-RiU.js";import{I as g,a as h,b as x}from"./IconBeach-DzetEHsX.js";import{I as M}from"./IconMore-DMci_zIv.js";import{I as O}from"./IconCheckmark-Bf-NMmm5.js";import{I as n}from"./IconSettings-BCzGE3Ag.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CVnEYvk9.js";import"./index-S5f01eIC.js";import"./Text-D54bL8z_.js";import"./helpers-B5A_5U5O.js";import"./index-AboGxAif.js";import"./types-B3Pu1DcF.js";import"./index-DFxO2z6Z.js";import"./Popover-CStAtv2L.js";import"./IconDismiss-yzywtoDq.js";import"./Link-Cs3rGHS3.js";import"./CollapseGroup-DjAwRo-z.js";import"./Divider-C0T2g0Be.js";import"./AnimatePresenceWrapper-80rZqkqy.js";import"./IconChevronDown-CQN2ytjN.js";import"./IconChevronUp-B0BSMWmn.js";import"./IconChevronRight-CLMJ4h6C.js";import"./AvatarGroup--UEbFog3.js";import"./DropzoneFileUpload-Cj1bDyQH.js";import"./Label-BKSYI_4d.js";import"./useFormProps-DlWasbO6.js";import"./ErrorMessage-D6PlMWdk.js";import"./IconDynamicComponent-DUDId7z0.js";import"./Snackbar-D9L6RZcA.js";import"./Alert-4lr12z_F.js";import"./IconDismissFilled-BvmE5JX7.js";import"./Progress-Z2a7KbAS.js";import"./IconAdd-BxBii4w2.js";import"./Checkbox-7Rhb01yJ.js";import"./IconInfo-CxgBwp9W.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
