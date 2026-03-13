import{j as e}from"./jsx-runtime-LFUCOF7Y.js";import{r as i}from"./iframe-DC_nJ6hE.js";import{M as C,N as I}from"./NestedMenu-Ca538ym9.js";import{B as b}from"./Button-gtpO-8LA.js";import{I as y}from"./IconArrowDownloadFilled-BEo2jdVK.js";import{I as g,a as h,b as x}from"./IconBeach-x_dNBvNa.js";import{I as M}from"./IconMore-CNj9-qy0.js";import{I as O}from"./IconCheckmark-CaN5Glqj.js";import{I as n}from"./IconSettings-DmNsi1i0.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DBKn5tLZ.js";import"./index-CfTNx9Qa.js";import"./Text-BGxii9Ol.js";import"./helpers-D13QQKuw.js";import"./index-DYDl_GcV.js";import"./types-BOkIULGl.js";import"./Popover-CpgCTNh4.js";import"./IconDismiss-Bba1Raav.js";import"./Link-CQnTDBH6.js";import"./index-eFDGrJCs.js";import"./CollapseGroup-DKawTQuG.js";import"./Divider-C5fE1Zx_.js";import"./AnimatePresenceWrapper-8L-i1Uyl.js";import"./IconChevronDown-1PyfCtSk.js";import"./IconChevronUp-BCKN41tf.js";import"./IconChevronRight-DfV37wF_.js";import"./AvatarGroup-DuW-eRO4.js";import"./DropzoneFileUpload-BlwVTK1S.js";import"./Label-C6BSI9XD.js";import"./useFormProps-BuxPBVGZ.js";import"./ErrorMessage-D7NxEEPw.js";import"./IconDynamicComponent-DVu66zYu.js";import"./Snackbar-D3QppFK9.js";import"./Alert-DzGkT5lC.js";import"./IconDismissFilled-_SnWZYtc.js";import"./Progress-BoBjaFhh.js";import"./IconAdd-Ctyu1kY_.js";import"./Checkbox-Xxu9iOhD.js";import"./IconInfo-BMIAQGfS.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
