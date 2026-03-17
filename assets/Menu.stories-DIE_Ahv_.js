import{j as e}from"./jsx-runtime-Dsfa1cy_.js";import{r as i}from"./iframe-Cu1ACcZ0.js";import{M as C,N as I}from"./NestedMenu-BOl1_F-L.js";import{B as b}from"./Button-BIi5M3eE.js";import{I as y}from"./IconArrowDownloadFilled-D9zHe4Ng.js";import{I as g,a as h,b as x}from"./IconBeach-CjISHqAQ.js";import{I as M}from"./IconMore-BPzQMkc7.js";import{I as O}from"./IconCheckmark-BR7yBRgf.js";import{I as n}from"./IconSettings-DnPF2IM2.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DevWO_X7.js";import"./index-FM0QuzL8.js";import"./Text-Bcy4m-cf.js";import"./helpers-DMMClaLv.js";import"./index-DYDl_GcV.js";import"./types-Bx1EyXuF.js";import"./Popover-4wwBX2nS.js";import"./IconDismiss-BPLHkZLQ.js";import"./Link-Cu2lT_Pe.js";import"./index-B--9zh3V.js";import"./CollapseGroup-DVMAVNnQ.js";import"./Divider-C2GFQ3Ns.js";import"./AnimatePresenceWrapper-Bp4_G_sF.js";import"./IconChevronDown-DrOhvkvm.js";import"./IconChevronUp-YlhwKZRh.js";import"./IconChevronRight-Dz34_apv.js";import"./AvatarGroup-CiIPJxX_.js";import"./DropzoneFileUpload-BixBG1qM.js";import"./Label-WICMGV8E.js";import"./useFormProps-BoJt_c__.js";import"./ErrorMessage-BPsIlmQu.js";import"./IconDynamicComponent-GKfg8g9N.js";import"./Snackbar-r6KvgWaG.js";import"./Alert-BLqwXpzE.js";import"./IconDismissFilled-dM2LBSTD.js";import"./Progress-B42gXeOw.js";import"./IconAdd-BY3ZQi1E.js";import"./Checkbox-Gt24n7Lq.js";import"./IconInfo-P8mEn3Q_.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
